import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if the restaurant in Ao Nang, Krabi (Asia/Bangkok) is currently open.
 * Hours: 11:00 AM to 11:00 PM (11:00 - 23:00) daily.
 */
export function getBangkokStatus(): { isOpen: boolean; text: string; nextTime: string; localTimeStr: string } {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Bangkok',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
    const currentMins = hour * 60 + minute;

    const openMins = 11 * 60; // 11:00 AM
    const closeMins = 23 * 60; // 11:00 PM

    const isOpen = currentMins >= openMins && currentMins < closeMins;
    const timeDisplay = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} (ICT / Krabi)`;

    if (isOpen) {
      return {
        isOpen: true,
        text: 'Open Now',
        nextTime: 'Closes at 11:00 PM',
        localTimeStr: timeDisplay,
      };
    } else {
      return {
        isOpen: false,
        text: 'Closed Now',
        nextTime: 'Opens at 11:00 AM',
        localTimeStr: timeDisplay,
      };
    }
  } catch {
    return {
      isOpen: true,
      text: 'Open Daily',
      nextTime: '11:00 AM – 11:00 PM',
      localTimeStr: 'Ao Nang, Krabi',
    };
  }
}

/**
 * Formats WhatsApp booking message URL
 */
export function createWhatsAppBookingUrl(data: {
  name: string;
  guests: string;
  date: string;
  time: string;
  occasion?: string;
  specialRequests?: string;
}): string {
  const phone = '66659561887';
  const text = `*New Table Reservation Enquiry — Ali Baba Krabi*
---------------------------------------
• *Guest Name:* ${data.name}
• *Party Size:* ${data.guests} Guests
• *Date:* ${data.date}
• *Time:* ${data.time}
• *Occasion:* ${data.occasion || 'Dining'}
${data.specialRequests ? `• *Special Notes:* ${data.specialRequests}` : ''}
---------------------------------------
_Sent via alibabakrabi.com website reservation concierge._`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

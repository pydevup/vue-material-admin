import type { IEvent, INewEvent } from '@/api/type';
import axios from '@/plugins/axios';
import { defineStore } from 'pinia';
import { fetchEvents } from '@/api/event';

export const useCalendarStore = defineStore('calendar', {
  // arrow function recommended for full type inference
  state: () => ({
    availableCalendars: [
      {
        color: 'error',
        label: 'Personal'
      },
      {
        color: 'primary',
        label: 'Business'
      },
      {
        color: 'warning',
        label: 'Family'
      },
      {
        color: 'success',
        label: 'Holiday'
      },
      {
        color: 'info',
        label: 'ETC'
      }
    ],
    selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
  }),
  actions: {
    async fetchEvents() {
      return fetchEvents({ calendars: this.selectedCalendars.join(',') });
    },
    async addEvent(event: INewEvent) {
      return axios.post('/apps/calendar/events', { event });
    },
    async updateEvent(event: IEvent) {
      return axios.post(`/apps/calendar/events/${event.id}`, { event });
    },
    async removeEvent(eventId: string) {
      return axios.delete(`/apps/calendar/events/${eventId}`);
    }
  }
});
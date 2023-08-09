import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'https://json-server-mandira10.vercel.app/api/data';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data[0]?.locations ?? [];
  }
  

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const response = await fetch(this.url);
    const data = await response.json();
    const locations = data[0]?.locations ?? [];
    return locations.find((location: { id: number; }) => location.id === id);
  }
  

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
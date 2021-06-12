export type Museum = {
  id: string;
  name: string;
  description: string;
  location: {
    lat: string;
    lng: string;
  };
};

export interface IMuseumService {
  findAll: () => Promise<Museum[]>;
  findOne: (id: string) => Promise<Museum>;
}

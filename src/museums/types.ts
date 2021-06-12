export type Museum = {
  id: string;
  name: string;
  description: string;
  location: {
    lat: string;
    lng: string;
  };
  createdAt: Date;
};

export type CreateMuseum = Omit<Museum, "id" | "createdAt">;

export type CreateMuseumPayload = {
  name: string;
  description: string;
  location: { lat: string; lng: string };
};

export interface IMuseumService {
  findAll: () => Promise<Museum[]>;
  findOne: (id: string) => Promise<Museum>;
  addOne: (payload: CreateMuseumPayload) => Promise<Museum>;
}

export interface IMuseumRepository {
  findAll: () => Promise<Museum[]>;
  findOne: (id: string) => Promise<Museum>;
  addOne: (museum: CreateMuseum) => Promise<Museum>;
}

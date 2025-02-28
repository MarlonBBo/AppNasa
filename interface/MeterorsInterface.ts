export interface Meteor {
    id: string;
    name: string;
    estimated_diameter: {
      kilometers: {
        estimated_diameter_max: number;
      };
    };
    close_approach_data: Array<{
      relative_velocity: {
        kilometers_per_hour: string;
      };
      miss_distance: {
        kilometers: string;
      };
    }>;
    is_potentially_hazardous_asteroid: boolean;
  }
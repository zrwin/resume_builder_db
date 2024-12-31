import type { Schema, Struct } from '@strapi/strapi';

export interface CategoryExperience extends Struct.ComponentSchema {
  collectionName: 'components_category_experiences';
  info: {
    displayName: 'Experience';
    icon: '';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummary: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'category.experience': CategoryExperience;
      'experience.experience': ExperienceExperience;
    }
  }
}

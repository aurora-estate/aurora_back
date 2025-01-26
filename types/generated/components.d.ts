import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderHeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_header_links';
  info: {
    description: '';
    displayName: 'Header_links';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files'>;
    isIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderHeaderPosts extends Struct.ComponentSchema {
  collectionName: 'components_header_header_posts';
  info: {
    displayName: 'Header_posts';
  };
  attributes: {
    Desc: Schema.Attribute.Text & Schema.Attribute.Required;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header.header-links': HeaderHeaderLinks;
      'header.header-posts': HeaderHeaderPosts;
    }
  }
}

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
    description: '';
    displayName: 'Header_posts';
  };
  attributes: {
    Desc: Schema.Attribute.Text;
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MainMainBackground extends Struct.ComponentSchema {
  collectionName: 'components_main_main_backgrounds';
  info: {
    displayName: 'Main_background';
  };
  attributes: {
    Main_background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface OrderCity extends Struct.ComponentSchema {
  collectionName: 'components_order_cities';
  info: {
    displayName: 'City';
  };
  attributes: {
    Coord_lat: Schema.Attribute.String;
    Coord_lng: Schema.Attribute.String;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderObjectCategory extends Struct.ComponentSchema {
  collectionName: 'components_order_object_categories';
  info: {
    displayName: 'Object_category';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface OrderServiceType extends Struct.ComponentSchema {
  collectionName: 'components_order_service_types';
  info: {
    displayName: 'service_type';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface YoursBlockYours extends Struct.ComponentSchema {
  collectionName: 'components_yours_block_yours';
  info: {
    description: '';
    displayName: 'Block_yours';
  };
  attributes: {
    Color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#ffffff'>;
    Desc: Schema.Attribute.String;
    Main_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['t-1', 't-2', 't-3', 't-4']> &
      Schema.Attribute.DefaultTo<'t-1'>;
    visibleMobile: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header.header-links': HeaderHeaderLinks;
      'header.header-posts': HeaderHeaderPosts;
      'main.main-background': MainMainBackground;
      'order.city': OrderCity;
      'order.object-category': OrderObjectCategory;
      'order.service-type': OrderServiceType;
      'yours.block-yours': YoursBlockYours;
    }
  }
}

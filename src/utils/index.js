import get from 'lodash.get';

export const transformArticleData = data => {
  const imageUrl = get(
    data,
    'mainImage.value.leadImage.renditions.default.source',
    ''
  );
  return {
    heading: get(data, 'heading.value', ''),
    mainImage: imageUrl
      ? `${process.env.REACT_APP_DOMAIN_NAME}/api/${process.env.REACT_APP_CONTENT_HUB_ID}${imageUrl}`
      : 'https://pvsmt99345.i.lithium.com/t5/image/serverpage/image-id/10546i3DAC5A5993C8BC8C?v=1.0',
    author: get(data, 'author.value', ''),
    date: get(data, 'date.value', ''),
    body: get(data, 'body.values', '')
  };
};

export const getErrorImage = () =>
  'https://miro.medium.com/max/2100/1*ASPrAbd2qtFVSVuru7Y7Rw.png';

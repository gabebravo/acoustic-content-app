import get from 'lodash.get';

export const transformArticleData = article => {
  const imageUrl = get(
    article,
    'mainImage.value.leadImage.renditions.default.source',
    ''
  );
  return {
    heading: get(article, 'heading.value', ''),
    mainImage: imageUrl
      ? `${process.env.REACT_APP_DOMAIN_NAME}/api/${process.env.REACT_APP_CONTENT_HUB_ID}${imageUrl}`
      : 'https://pvsmt99345.i.lithium.com/t5/image/serverpage/image-id/10546i3DAC5A5993C8BC8C?v=1.0',
    author: get(article, 'author.value', ''),
    date: get(article, 'date.value', ''),
    body: get(article, 'body.values', '')
  };
};

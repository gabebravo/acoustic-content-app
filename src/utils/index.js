import get from 'lodash.get';

export const transformApiData = article => ({
  heading: get(article, 'heading.value', ''),
  mainImage: get(
    article,
    'mainImage.value.leadImage.renditions.default.source',
    ''
  ),
  author: get(article, 'author.value', ''),
  date: get(article, 'elementType', ''),
  body: get(article, 'body.values', '')
});

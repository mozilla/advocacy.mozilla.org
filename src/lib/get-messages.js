import defaultLocales from '../../public/locales.json';
import buyersGuideLocales from '../../public/buyers-guide-locales.json';

module.exports = function(assign, locale, location) {

  if (location.indexOf('/buyers-guide') !== -1) {
    return assign({}, buyersGuideLocales['en-US'], buyersGuideLocales[locale]);
  }
  return assign({}, defaultLocales['en-US'], defaultLocales[locale]);
};

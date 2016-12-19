import { TranslateService } from 'ng2-translate';
import { Living } from '../index';

export const translateName = (translateService: TranslateService, living: Living) : string => {
    if (translateService.currentLang === 'fi' && living.name) return living.name;
    if (translateService.currentLang === 'en' && living.englishName) return living.englishName;
    return living.scientificName;
};

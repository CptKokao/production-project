import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfile } from './validateProfileData';

const data = {
    first: 'first',
    lastname: 'lastname',
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'UlbiTv',
    avatar: '',
};

describe('validateProfile.test', () => {
    test('success validateProfile', async () => {
        const result = validateProfile(data);

        expect(result).toEqual([]);
    });

    test('without data', async () => {
        const result = validateProfile();

        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });

    test('incorrect first and lastname', async () => {
        const result = validateProfile({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfile({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfile({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('incorrect all', async () => {
        const result = validateProfile({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});

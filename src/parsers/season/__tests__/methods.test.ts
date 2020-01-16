import { list } from '../methods';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/season/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for EPL (id=GB2)',
            async () => {
                const response = [
                    { competitionId: 'GB1', id: '2019', title: '19/20' },
                    { competitionId: 'GB1', id: '2018', title: '18/19' },
                    { competitionId: 'GB1', id: '2017', title: '17/18' },
                    { competitionId: 'GB1', id: '2016', title: '16/17' },
                    { competitionId: 'GB1', id: '2015', title: '15/16' },
                    { competitionId: 'GB1', id: '2014', title: '14/15' },
                    { competitionId: 'GB1', id: '2013', title: '13/14' },
                    { competitionId: 'GB1', id: '2012', title: '12/13' },
                    { competitionId: 'GB1', id: '2011', title: '11/12' },
                    { competitionId: 'GB1', id: '2010', title: '10/11' },
                    { competitionId: 'GB1', id: '2009', title: '09/10' },
                    { competitionId: 'GB1', id: '2008', title: '08/09' },
                    { competitionId: 'GB1', id: '2007', title: '07/08' },
                    { competitionId: 'GB1', id: '2006', title: '06/07' },
                    { competitionId: 'GB1', id: '2005', title: '05/06' },
                    { competitionId: 'GB1', id: '2004', title: '04/05' },
                    { competitionId: 'GB1', id: '2003', title: '03/04' },
                    { competitionId: 'GB1', id: '2002', title: '02/03' },
                    { competitionId: 'GB1', id: '2001', title: '01/02' },
                    { competitionId: 'GB1', id: '2000', title: '00/01' },
                    { competitionId: 'GB1', id: '1999', title: '99/00' },
                    { competitionId: 'GB1', id: '1998', title: '98/99' },
                    { competitionId: 'GB1', id: '1997', title: '97/98' },
                    { competitionId: 'GB1', id: '1996', title: '96/97' },
                    { competitionId: 'GB1', id: '1995', title: '95/96' },
                    { competitionId: 'GB1', id: '1994', title: '94/95' },
                    { competitionId: 'GB1', id: '1993', title: '93/94' },
                    { competitionId: 'GB1', id: '1992', title: '92/93' },
                ];
                await expect(list('GB1')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return correct result for 1.Bundesliga (id=L1)',
            async () => {
                const response = [
                    { competitionId: 'L1', id: '2019', title: '19/20' },
                    { competitionId: 'L1', id: '2018', title: '18/19' },
                    { competitionId: 'L1', id: '2017', title: '17/18' },
                    { competitionId: 'L1', id: '2016', title: '16/17' },
                    { competitionId: 'L1', id: '2015', title: '15/16' },
                    { competitionId: 'L1', id: '2014', title: '14/15' },
                    { competitionId: 'L1', id: '2013', title: '13/14' },
                    { competitionId: 'L1', id: '2012', title: '12/13' },
                    { competitionId: 'L1', id: '2011', title: '11/12' },
                    { competitionId: 'L1', id: '2010', title: '10/11' },
                    { competitionId: 'L1', id: '2009', title: '09/10' },
                    { competitionId: 'L1', id: '2008', title: '08/09' },
                    { competitionId: 'L1', id: '2007', title: '07/08' },
                    { competitionId: 'L1', id: '2006', title: '06/07' },
                    { competitionId: 'L1', id: '2005', title: '05/06' },
                    { competitionId: 'L1', id: '2004', title: '04/05' },
                    { competitionId: 'L1', id: '2003', title: '03/04' },
                    { competitionId: 'L1', id: '2002', title: '02/03' },
                    { competitionId: 'L1', id: '2001', title: '01/02' },
                    { competitionId: 'L1', id: '2000', title: '00/01' },
                    { competitionId: 'L1', id: '1999', title: '99/00' },
                    { competitionId: 'L1', id: '1998', title: '98/99' },
                    { competitionId: 'L1', id: '1997', title: '97/98' },
                    { competitionId: 'L1', id: '1996', title: '96/97' },
                    { competitionId: 'L1', id: '1995', title: '95/96' },
                    { competitionId: 'L1', id: '1994', title: '94/95' },
                    { competitionId: 'L1', id: '1993', title: '93/94' },
                    { competitionId: 'L1', id: '1992', title: '92/93' },
                    { competitionId: 'L1', id: '1991', title: '91/92' },
                    { competitionId: 'L1', id: '1990', title: '90/91' },
                    { competitionId: 'L1', id: '1989', title: '89/90' },
                    { competitionId: 'L1', id: '1988', title: '88/89' },
                    { competitionId: 'L1', id: '1987', title: '87/88' },
                    { competitionId: 'L1', id: '1986', title: '86/87' },
                    { competitionId: 'L1', id: '1985', title: '85/86' },
                    { competitionId: 'L1', id: '1984', title: '84/85' },
                    { competitionId: 'L1', id: '1983', title: '83/84' },
                    { competitionId: 'L1', id: '1982', title: '82/83' },
                    { competitionId: 'L1', id: '1981', title: '81/82' },
                    { competitionId: 'L1', id: '1980', title: '80/81' },
                    { competitionId: 'L1', id: '1979', title: '79/80' },
                    { competitionId: 'L1', id: '1978', title: '78/79' },
                    { competitionId: 'L1', id: '1977', title: '77/78' },
                    { competitionId: 'L1', id: '1976', title: '76/77' },
                    { competitionId: 'L1', id: '1975', title: '75/76' },
                    { competitionId: 'L1', id: '1974', title: '74/75' },
                    { competitionId: 'L1', id: '1973', title: '73/74' },
                    { competitionId: 'L1', id: '1972', title: '72/73' },
                    { competitionId: 'L1', id: '1971', title: '71/72' },
                    { competitionId: 'L1', id: '1970', title: '70/71' },
                    { competitionId: 'L1', id: '1969', title: '69/70' },
                    { competitionId: 'L1', id: '1968', title: '68/69' },
                    { competitionId: 'L1', id: '1967', title: '67/68' },
                    { competitionId: 'L1', id: '1966', title: '66/67' },
                    { competitionId: 'L1', id: '1965', title: '65/66' },
                    { competitionId: 'L1', id: '1964', title: '64/65' },
                    { competitionId: 'L1', id: '1963', title: '63/64' },
                ];
                await expect(list('L1')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for NO provided params',
            async () => {
                const response = [];
                await expect(list(undefined)).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for INcorrect params',
            async () => {
                const response = [];
                await expect(list('aaa')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
    });
});

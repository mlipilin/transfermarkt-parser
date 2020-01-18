import { list } from '../methods';

// Entities
import { createSeason } from '../../../entities/season';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/season/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for EPL (id=GB2)',
            async () => {
                const response = [
                    createSeason({ competitionId: 'GB1', id: '2019', title: '19/20' }),
                    createSeason({ competitionId: 'GB1', id: '2018', title: '18/19' }),
                    createSeason({ competitionId: 'GB1', id: '2017', title: '17/18' }),
                    createSeason({ competitionId: 'GB1', id: '2016', title: '16/17' }),
                    createSeason({ competitionId: 'GB1', id: '2015', title: '15/16' }),
                    createSeason({ competitionId: 'GB1', id: '2014', title: '14/15' }),
                    createSeason({ competitionId: 'GB1', id: '2013', title: '13/14' }),
                    createSeason({ competitionId: 'GB1', id: '2012', title: '12/13' }),
                    createSeason({ competitionId: 'GB1', id: '2011', title: '11/12' }),
                    createSeason({ competitionId: 'GB1', id: '2010', title: '10/11' }),
                    createSeason({ competitionId: 'GB1', id: '2009', title: '09/10' }),
                    createSeason({ competitionId: 'GB1', id: '2008', title: '08/09' }),
                    createSeason({ competitionId: 'GB1', id: '2007', title: '07/08' }),
                    createSeason({ competitionId: 'GB1', id: '2006', title: '06/07' }),
                    createSeason({ competitionId: 'GB1', id: '2005', title: '05/06' }),
                    createSeason({ competitionId: 'GB1', id: '2004', title: '04/05' }),
                    createSeason({ competitionId: 'GB1', id: '2003', title: '03/04' }),
                    createSeason({ competitionId: 'GB1', id: '2002', title: '02/03' }),
                    createSeason({ competitionId: 'GB1', id: '2001', title: '01/02' }),
                    createSeason({ competitionId: 'GB1', id: '2000', title: '00/01' }),
                    createSeason({ competitionId: 'GB1', id: '1999', title: '99/00' }),
                    createSeason({ competitionId: 'GB1', id: '1998', title: '98/99' }),
                    createSeason({ competitionId: 'GB1', id: '1997', title: '97/98' }),
                    createSeason({ competitionId: 'GB1', id: '1996', title: '96/97' }),
                    createSeason({ competitionId: 'GB1', id: '1995', title: '95/96' }),
                    createSeason({ competitionId: 'GB1', id: '1994', title: '94/95' }),
                    createSeason({ competitionId: 'GB1', id: '1993', title: '93/94' }),
                    createSeason({ competitionId: 'GB1', id: '1992', title: '92/93' }),
                ];
                await expect(list('GB1')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return correct result for 1.Bundesliga (id=L1)',
            async () => {
                const response = [
                    createSeason({ competitionId: 'L1', id: '2019', title: '19/20' }),
                    createSeason({ competitionId: 'L1', id: '2018', title: '18/19' }),
                    createSeason({ competitionId: 'L1', id: '2017', title: '17/18' }),
                    createSeason({ competitionId: 'L1', id: '2016', title: '16/17' }),
                    createSeason({ competitionId: 'L1', id: '2015', title: '15/16' }),
                    createSeason({ competitionId: 'L1', id: '2014', title: '14/15' }),
                    createSeason({ competitionId: 'L1', id: '2013', title: '13/14' }),
                    createSeason({ competitionId: 'L1', id: '2012', title: '12/13' }),
                    createSeason({ competitionId: 'L1', id: '2011', title: '11/12' }),
                    createSeason({ competitionId: 'L1', id: '2010', title: '10/11' }),
                    createSeason({ competitionId: 'L1', id: '2009', title: '09/10' }),
                    createSeason({ competitionId: 'L1', id: '2008', title: '08/09' }),
                    createSeason({ competitionId: 'L1', id: '2007', title: '07/08' }),
                    createSeason({ competitionId: 'L1', id: '2006', title: '06/07' }),
                    createSeason({ competitionId: 'L1', id: '2005', title: '05/06' }),
                    createSeason({ competitionId: 'L1', id: '2004', title: '04/05' }),
                    createSeason({ competitionId: 'L1', id: '2003', title: '03/04' }),
                    createSeason({ competitionId: 'L1', id: '2002', title: '02/03' }),
                    createSeason({ competitionId: 'L1', id: '2001', title: '01/02' }),
                    createSeason({ competitionId: 'L1', id: '2000', title: '00/01' }),
                    createSeason({ competitionId: 'L1', id: '1999', title: '99/00' }),
                    createSeason({ competitionId: 'L1', id: '1998', title: '98/99' }),
                    createSeason({ competitionId: 'L1', id: '1997', title: '97/98' }),
                    createSeason({ competitionId: 'L1', id: '1996', title: '96/97' }),
                    createSeason({ competitionId: 'L1', id: '1995', title: '95/96' }),
                    createSeason({ competitionId: 'L1', id: '1994', title: '94/95' }),
                    createSeason({ competitionId: 'L1', id: '1993', title: '93/94' }),
                    createSeason({ competitionId: 'L1', id: '1992', title: '92/93' }),
                    createSeason({ competitionId: 'L1', id: '1991', title: '91/92' }),
                    createSeason({ competitionId: 'L1', id: '1990', title: '90/91' }),
                    createSeason({ competitionId: 'L1', id: '1989', title: '89/90' }),
                    createSeason({ competitionId: 'L1', id: '1988', title: '88/89' }),
                    createSeason({ competitionId: 'L1', id: '1987', title: '87/88' }),
                    createSeason({ competitionId: 'L1', id: '1986', title: '86/87' }),
                    createSeason({ competitionId: 'L1', id: '1985', title: '85/86' }),
                    createSeason({ competitionId: 'L1', id: '1984', title: '84/85' }),
                    createSeason({ competitionId: 'L1', id: '1983', title: '83/84' }),
                    createSeason({ competitionId: 'L1', id: '1982', title: '82/83' }),
                    createSeason({ competitionId: 'L1', id: '1981', title: '81/82' }),
                    createSeason({ competitionId: 'L1', id: '1980', title: '80/81' }),
                    createSeason({ competitionId: 'L1', id: '1979', title: '79/80' }),
                    createSeason({ competitionId: 'L1', id: '1978', title: '78/79' }),
                    createSeason({ competitionId: 'L1', id: '1977', title: '77/78' }),
                    createSeason({ competitionId: 'L1', id: '1976', title: '76/77' }),
                    createSeason({ competitionId: 'L1', id: '1975', title: '75/76' }),
                    createSeason({ competitionId: 'L1', id: '1974', title: '74/75' }),
                    createSeason({ competitionId: 'L1', id: '1973', title: '73/74' }),
                    createSeason({ competitionId: 'L1', id: '1972', title: '72/73' }),
                    createSeason({ competitionId: 'L1', id: '1971', title: '71/72' }),
                    createSeason({ competitionId: 'L1', id: '1970', title: '70/71' }),
                    createSeason({ competitionId: 'L1', id: '1969', title: '69/70' }),
                    createSeason({ competitionId: 'L1', id: '1968', title: '68/69' }),
                    createSeason({ competitionId: 'L1', id: '1967', title: '67/68' }),
                    createSeason({ competitionId: 'L1', id: '1966', title: '66/67' }),
                    createSeason({ competitionId: 'L1', id: '1965', title: '65/66' }),
                    createSeason({ competitionId: 'L1', id: '1964', title: '64/65' }),
                    createSeason({ competitionId: 'L1', id: '1963', title: '63/64' }),
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

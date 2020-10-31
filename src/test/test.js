/**
 *
 *
 *
 */
import {ref} from "../main";
import Utils from "../utils";

Utils.test(
    'normal-test',
    ({equals}) => {
        const a = {
            b: 1,
            c: {
                d: 2,
                e: 3
            }
        };

        const r = ref(a, ['b1', 'c1'], ({b1, c1}, target) => {
            target.b = b1;
            target.c = c1;
        });

        r.b1 = 'das';
        r.c1 = {
            d: 3
        };
        r.c1.e = 99;

        equals(a.b, 'das');
        equals(a.c.d, 3);
        equals(a.c.e, 99);
    }
);
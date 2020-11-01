/**
 *
 *
 *
 */
import {createRef, link, ref} from "../main";
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

Utils.test('node-demo-01', ({equals}) => {
    const dataSource = {
        project: {
            name: 'project 01'
        },
        owner: {
            name: 'Ryan'
        }
    };

    const dataRef = ref(
        dataSource,
        {
            // declare vars and setting the initial values
            projectName: 'Unknown Project Name',
            ownerName: 'Unknown Owner Name'
        },
        ({projectName, ownerName}, targetDataSource) => {
            targetDataSource.project.name = projectName;
            targetDataSource.owner.name = ownerName;
        }
    );

    dataRef.projectName = 'project ref name';

    equals(dataSource.project.name, 'project ref name');
    equals(dataSource.owner.name, 'Unknown Owner Name');
});


Utils.test('new-feature', ({equals}) => {

    const data = {a: 1, b: 2};

    const r = createRef();

    r.value = link(
        ({value}) => {
            data.a = value;
        }
    );

    r.number = link(
        ['value'],
        ({number, value}) => {
            console.log(number, value);
            data.b = number + value
        }, 20
    );

    r.c = link(
        ['value'],
        ({c, value}) => {
            console.log('c', c, value);
            r.number = c + value;
        }, 50
    );

    r.value = 100;

    equals(data.b, 250);

    r.c = 50;

    equals(data.a, 100);
    equals(data.b, 250);
});
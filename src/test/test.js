import {createRef, initial, link, ref, refs} from "../main";
import Utils from "../utils";
import Ref from "../main/Ref";

Ref.setDefaultOption({isAsync: false});

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

        equals('das', a.b);
        equals(3, a.c.d);
        equals(99, a.c.e);
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

    equals('project ref name', dataSource.project.name);
    equals('Unknown Owner Name', dataSource.owner.name);
});

Utils.test('refs-testing', ({equals}) => {
    const projects = [{
        name: 'project 01',
        startCount: 50
    }, {
        name: 'project 02',
        startCount: 85
    }];


    const r = refs(projects, {
        increment: 0
    }, ({increment}, targetProject) => {
        targetProject.startCount += increment;
    });

    r.increment = 1;

    equals(51, projects[0].startCount);
    equals(86, projects[1].startCount);

    r.increment = 100;

    equals(151, projects[0].startCount);
    equals(186, projects[1].startCount);

});


Utils.test('new-feature', ({equals}) => {

    const data = {a: 1, b: 2};

    const r = createRef({
        c: 50,
        number: 20
    });

    r.value = link(
        ({value}) => {
            data.a = value;
        }
    );

    r.number = link(
        ['value'],
        ({number, value}) => {
            data.b = number + value
        }
    );

    r.c = link(
        ['value'],
        ({c, value}) => {
            r.number = c + value;
        }
    );

    r.value = 100;

    equals(250, data.b);

    r.c = 100;

    equals(100, data.a);
    equals(300, data.b);
});

Utils.test('infect-initial', ({equals}) => {

    const data = {};

    const r = new Ref();
    const proxy = r.proxy;

    proxy.name = initial('Ryan');
    proxy.age = initial(24);

    r.infectAll(() => {
        data.name = proxy.name;
        data.age = proxy.age;
    });

    proxy.age++;

    equals(25, data.age);
    equals('Ryan', data.name);

});
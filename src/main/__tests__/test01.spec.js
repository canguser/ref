import {createRef, initial, link, ref, refs} from "../index";
import Ref from "../Ref";

describe('usage', () => {

    Ref.setDefaultOption({isAsync: false});

    it('new-feature', () => {
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

        expect(data.b).toBe(250);

        r.c = 100;

        expect(data.a).toBe(100);
        expect(data.b).toBe(300);

    });
    it('normal-test', () => {
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

        expect(a.b).toBe('das');
        expect(a.c.d).toBe(3);
        expect(a.c.e).toBe(99);
    });
    it('normal-test', () => {
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

        expect(dataSource.project.name).toBe('project ref name');
        expect(dataSource.owner.name).toBe('Unknown Owner Name');

    });

    it('ref-testing', () => {
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

        expect(projects[0].startCount).toBe(51);
        expect(projects[1].startCount).toBe(86);

        r.increment = 100;

        expect(projects[0].startCount).toBe(151);
        expect(projects[1].startCount).toBe(186);
    })

    it('infect-initial', () => {
        const data = {};

        const r = new Ref();
        const proxy = r.proxy;

        proxy.name = initial('Ryan');
        proxy.age = initial(24);
        proxy.count = 1;
        data.gender = proxy.gender;

        r.infectAll(() => {
            data.name = proxy.name;
            data.age = proxy.age;
            data.count = proxy.count;
            data.gender = proxy.gender;
        });

        expect(data.gender).toBeUndefined();

        proxy.age++;
        proxy.count++;
        proxy.gender = 'male';

        expect(data.age).toBe(25);
        expect(data.name).toBe('Ryan');
        expect(data.gender).toBe('male');
        expect(data.count).toBe(2);

    });

    it('array-vars', () => {
        const data = {};

        const r = new Ref(['name', 'age']);

        r.infectAll((ref) => {
            data.name = ref.name;
            data.age = ref.age;
        });

        const proxy = r.proxy;

        proxy.name = 'Ryan';
        proxy.age = 24;

        expect(data.name).toBe('Ryan');
        expect(data.age).toBe(24);
    })

});
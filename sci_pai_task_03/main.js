let zadanie_03 = (() => {

    const task_1 = () => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        arr.forEach((el) => { console.log(el)});
    
    }

    const task_2 = () => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        let result = [];

        result = arr.map((el) => {
            let temp = 1;
            for(let i = 0; i < el; i++) {
                temp = temp * 2;
            }
            return temp;
        })

        console.log('Zadanie_03_task_2', result);
    }

    const task_3 = () => {
        let result = [];
        for(let i = 0; i <= 100000; i++){
            i % 99 == 0 ? result.push(i) : 0;
        }
    console.log('Zadanie_03_task_3', result);
    }

    const task_4 = () => {
        let arr = [{id: 0}, {id: 12}, {id: 43}, {id: 34}, {id: 23}, {id: 148}, {id: 124}, {id: 123}, {id: 45}, {id: 79}, {id: 483}];
        let result = arr.filter(id => id.id > 30 && id.id < 100);       
        console.log('Zadanie_03_task_4', result);
    }

    const task_5 = () => {
        let result = new Array(10000).fill({});

        console.log('Zadanie_03_task_5', result);
    }

    const task_6 = () => {
        let arr = [
            'internet',
            'pożyczka',
            'huśtawka',
            'naczynie',
            'przypływ',
            'paszport',
            'inżynier',
            'nadzieja',
            'ziemniak',
        ]
        let result = arr.includes("naczynie");
        let index = result ? arr.indexOf("naczynie") : null;
        console.log('Zadanie_03_task_6', result, index);
    }

    const task_7 = () => {
        let arr = [{id: 0}, {id: 12}, {id: 43}, {id: 34}, {id: 23}, {id: 148}, {id: 124}, {id: 123}, {id: 45}, {id: 79}, {id: 483}];
        console.log('Zadanie_03_task_7', arr.length);
        
        let index = arr.findIndex((el) => el.id == 124);
        arr.splice(index, 1);
        
        console.log('Zadanie_03_task_7', arr.length);
    }

    return {
        run: () => {
            let tasks = [
                task_1,
                task_2,
                task_3,
                task_4,
                task_5,
                task_6,
                task_7,
            ]

            tasks.forEach((element) => {
                element();
            });
        },
    }
})();

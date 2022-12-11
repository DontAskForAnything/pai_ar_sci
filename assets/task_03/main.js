let zadanie_03 = (() => {

    const task_1 = () => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    }

    const task_2 = () => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        let result = [];

        console.log('Zadanie_03_task_2', result);
    }

    const task_3 = () => {
        let result = [];

        console.log('Zadanie_03_task_3', result);
    }

    const task_4 = () => {
        let arr = [{id: 0}, {id: 12}, {id: 43}, {id: 34}, {id: 23}, {id: 148}, {id: 124}, {id: 123}, {id: 45}, {id: 79}, {id: 483}];
        let result = [];

        console.log('Zadanie_03_task_4', result);
    }

    const task_5 = () => {
        let result = [];

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
        
        // console.log('Zadanie_03_task_6', result, index);
    }

    const task_7 = () => {
        let arr = [{id: 0}, {id: 12}, {id: 43}, {id: 34}, {id: 23}, {id: 148}, {id: 124}, {id: 123}, {id: 45}, {id: 79}, {id: 483}];
        console.log('Zadanie_03_task_7', arr.length);



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

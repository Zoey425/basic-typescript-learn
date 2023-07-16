interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear1: Bear = {
    name: 'honey bear',
    honey: true,
};

///////////////////////////////////////////
///////////////////////////////////////////

type Animal1 = {
    name: string;
};

type Bear1 = Animal1 & {
    honey: boolean;
};

const bear2: Bear1 = {
    name: 'honey bear',
    honey: true,
};

///////////////////////
///////////////////////

interface People {
    name: string;
}

interface People {
    age: number;
}

const eun: People = {
    name: 'ey',
    age: 23,
};

///////////////////////
///////////////////////

// type People1 {
//     name: string;
// }

// type People1 {
//     age: number;
// }

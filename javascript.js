const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () =>name;
    const die = () => {

    }
    const damage = x => {
        health -=x;
        if (health <= 0){
            die();
        }
    }
    const attack = enemy =>{
        if (level < enemy.getLevel()){
            damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    };
    return {attack, damage, getLevel, getName};
};

const jimmie = Player(`Jim`, 10);
const badGuy = Player(`Evil Jeffe`, 5);
jimmie.attack(badGuy);

const kevin = Player(`Kevin`, 15);

//Spent several hours over the last 3 days learning to bundle modules with webpack. 
//committing here to long SOME progress on github. 8.22
//logging some progress 8/27
//Logging some progress on Bat in the spaceshipi project on scratch 9/10
import * as readline from 'readline';
import Park from './park';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'PARKLOT> '
});

let dkatalisPark:Park = new Park();
rl.prompt();        
rl.on('line', (line:string) => {
    const data = line.trim().split(" ");
        switch(data[0].toLowerCase()) {
                  case 'create_parking_lot':
                    console.log(dkatalisPark.createParkingSpace(parseInt(data[1])));
                    break;
                  case 'park':
                    console.log(dkatalisPark.park(data[1]));
                    break;
                  case 'leave':
                    console.log(dkatalisPark.leave(data[1], parseInt(data[2])))
                    break;
                  case 'status':
                    console.log(dkatalisPark.status());
                    break;
                   case 'exit':
                        rl.close();
                        break;
                  default:
                    console.log('Invalid command!');
                    break;
               }
            rl.prompt();
        }).on('close', () => {
            console.log('Have a great day! Thank you for playing with us.');
            process.exit(0);
          });
interface ParkLot {
    createParkingSpace(size:number): any;
    park(licenseNumber:string): any;
    leave(licenseNumber:string, hour:number): any;
    status(): any;
}

class Park implements ParkLot{
    parkingSpace!:string[];
    sizePark!:number;
    createParkingSpace(size: number){
        this.sizePark = size;
        this.parkingSpace = []
        for(let i = 0; i < size; i++){
            this.parkingSpace.push('');
        }
        console.log(`Created parking lot with ${size} slots`)
    }

    park(licenseNumber:string){
        let index = this.parkingSpace.indexOf('');
        if(index < 0){
            console.log('Sorry, parking lot is full');
            return;
        }
        let indexCar = this.parkingSpace.indexOf(licenseNumber);
        if(indexCar >= 0){
            console.log(`Registration number ${licenseNumber} already parked`);
            return;
        }
        const slot = index + 1;
        this.parkingSpace.splice(index, 1, licenseNumber);
        console.log('Allocated slot number: ', slot);
    }

    leave(licenseNumber:string, hour:number=1){
        let index = this.parkingSpace.indexOf(licenseNumber);
        if(index < 0){
            console.log(`Registration number ${licenseNumber} not found`);
            return;
        }
        this.parkingSpace.splice(index, 1, '');
        console.log(`Registration number ${licenseNumber} with Slot Number ${index+1} is free with Charge ${this.cost(hour)}`)
    }

    cost(hour:number){
        let initialCost = 10;
        if(hour <= 2){
            return initialCost;
        }else{
            return initialCost + (hour - 2) * 10;
        }
    }

    status(){
        let i = 1;
        console.log('Slot No. - Registration No.')
        for(let car of this.parkingSpace){
            console.log(`${i++}  ${car}`)
        }
    }
    
}

export default Park;
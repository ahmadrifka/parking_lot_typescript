import Park from '../park';


describe('parking lot test',() => {
    test('should return parking lot with 6 slots when create parking lot with 6 slot', () => {
        //Given
        const park = new Park();
        const expectedSlots = 6;
        const expectedString = 'Created parking lot with 6 slots';
        //When
        const result = park.createParkingSpace(6);
        //Then
        expect(park.sizePark).toEqual(expectedSlots)
        expect(result).toEqual(expectedString);
    });

    test('should return allocated parking with slot number 1 when park the car with license number', () => {
        //Given
        const park = new Park();
        const expectedString = 'Allocated slot number: 1';
        const licenseNumber = 'B 1234 AB';
        //When
        park.createParkingSpace(6);
        const result = park.park(licenseNumber);

        //Then
        expect(result).toEqual(expectedString)
    
    });

    test('should return parking lot is full when park the car', () => {
        //Given
        const park = new Park();
        const expectedString = 'Sorry, parking lot is full';
        const bmw = 'B 1234 AB';
        const porsche = 'B 1234 AB';
        //When
        park.createParkingSpace(1);
       park.park(bmw);
        const result = park.park(porsche);

        //Then
        expect(result).toEqual(expectedString)
    });

    test('should return the car already parked when park with duplicate car', () => {
        //Given
        const park = new Park();
        const expectedString = 'Registration number B 1234 AB already parked';
        const bmw = 'B 1234 AB';
        const porsche = 'B 1234 AB';
        //When
        park.createParkingSpace(3);
        park.park(bmw);
        park.park(porsche);
        const result = park.park(bmw);

        //Then
        expect(result).toEqual(expectedString)
    });

    test('should return the car leave with total charge $10 when the car is leaving with 1 hours ', () => {
        //Given
        const park = new Park();
        const expectedString = 'Registration number B 1234 AB with Slot Number 1 is free with Charge 10';
        const bmw = 'B 1234 AB';
        const porsche = 'B 1234 AB';
        //When
        park.createParkingSpace(3);
        park.park(bmw);
        park.park(porsche);
        const result = park.leave(bmw, 1);

        //Then
        expect(result).toEqual(expectedString)
    });

    test('should return the car leave with total charge $30 when the car is leaving with 4 hours ', () => {
        //Given
        const park = new Park();
        const expectedString = 'Registration number B 1234 AB with Slot Number 1 is free with Charge 30';
        const bmw = 'B 1234 AB';
        const porsche = 'B 1234 AB';
        //When
        park.createParkingSpace(3);
        park.park(bmw);
        park.park(porsche);
        const result = park.leave(bmw, 4);

        //Then
        expect(result).toEqual(expectedString)
    });

    test('should return the car is not found when not exist car leaving', () => {
        //Given
        const park = new Park();
        const expectedString = 'Registration number B 1233 AB not found';
        const bmw = 'B 1234 AB';
        const porsche = 'B 1233 AB';
        //When
        park.createParkingSpace(1);
        park.park(bmw);
        park.park(porsche);
        const result = park.leave(porsche, 4);

        //Then
        expect(result).toEqual(expectedString)
    });

    test('should return status parking lot', () => {
        //Given
        console.log = jest.fn();
        let log = console.log; 
        const park = new Park();
        const expectedString = 'Slot No. - Registration No.\n1  B 1234 AB';
        log(expectedString);
        const bmw = 'B 1234 AB';
        //When
        park.createParkingSpace(1);
        park.park(bmw);
        const result = park.status();

        //Then
        expect(result).toEqual(expectedString)
    });



});
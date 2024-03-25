class Car{
		constructor(carName, carBattery, carMileage){
			this._carName = carName
			this._carBattery = carBattery
			this._carMileage = carMileage
		}
		move(){
			this._carBattery -= 10	
			this._carMileage += 10
		}
	}
	
export { Car }
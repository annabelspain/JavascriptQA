import MotorVehicle from "./motorvehicle.mjs"

export default class Car extends MotorVehicle
{
    constructor(make, model, engineSize, doors, satNav=false, wheels)
    {
        super(make, model, wheels=4, engineSize)
        this._doors = doors
        this._satNav = satNav
    }
    get doors(){return this._doors}
    get satNav(){return this.satNav}
    set satNav(satNav){this._satNav = satNav}
}
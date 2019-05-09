export class WorkoutPreferencesDataModel {

	public fitnessLevel: string;
    public location: string;
    public type: string;
    
    constructor(){
    	this.fitnessLevel = ""; 
    	this.location = ""; 
    	this.type = "";
    }

    setLocation(val){
        this.location = val;
    }

    getLocation(){
        return this.location;
    }


    getFitnessLevel(){
        return this.fitnessLevel;
    }

    setFitnessLevel(val){
        this.fitnessLevel = val;
    }

    getType(){
        return this.type;
    }

    setType(val){
        this.type = val;
    }
}
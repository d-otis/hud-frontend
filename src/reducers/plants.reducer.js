const INITIAL_STATE = [
  // isLoading: true
]

const plantsReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case "SET_PLANTS":
      const newState = action.payload.data.map(plant => {
        return {
          id: plant.id,
          name: plant.attributes.name,
          description: plant.attributes.description,
          watering: plant.attributes.watering,
          light: plant.attributes.light,
          soil: plant.attributes.soil,
          pestAndDisease: plant.attributes.pest_and_disease,
          pruning: plant.attributes.pruning,
          tempLow: plant.attributes.temp_low,
          tempHi: plant.attributes.temp_hi,
          fertilization: plant.attributes.fertilization,
          latinName: plant.attributes.latin_name,
          roomId: plant.attributes.room.id,
          seasonIds: plant.attributes.seasons.map(season => season.id)
        }
      })
      return newState
    
      default:
        return state
  }
}

export default plantsReducer
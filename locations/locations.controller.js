// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer

const router = require('express').Router()
const locationsService = require('./locations.model')

//get all function
router.get('/locations', async(req, res) => {
		try{
			const locations = await locationsService.find()
			res.json(locations)
		}catch(err){
			res.send('Error' + err )
		}	
})

//get location by id
router.get('/locations/:id', async(req, res) => {
	try{
		const location = await locationsService.findById(req.params.id)
		res.json(location)
	}catch(err){
		res.send('Error' + err )
	}	
})

//function post
router.post('/locations', async(req, res)=>{
	const location = new locationsService({
		filmType: req.body.filmType,
		filmProducerName: req.body.filmProducerName,
		endDate: req.body.endDate,
		filmName: req.body.filmName,
		district: req.body.district,
		geolocation: {
			coordinates: req.body.geolocation.coordinates,
			type: req.body.geolocation.type
		},
		sourceLocationId: req.body.sourceLocationId,
		filmDirectorName: req.body.filmDirectorName,
		address: req.body.address,
		startDate: req.body.startDate,
		year: req.body.year,
	})
	try{
			const location1 = await location.save()
			res.json(location1)
	}catch(err){
			res.send('Error')
	}
})

//update fonction by id
router.patch('/locations/:id', async( req, res)=>{
		try{
			const location = await locationsService.findById(req.params.id)

			location.filmType= req.body.filmType,
			location.filmProducerName= req.body.filmProducerName,
			location.endDate= req.body.endDate,
			location.filmName= req.body.filmName,
			location.district= req.body.district,
			location.geolocation.coordinates=req.body.geolocation.coordinates,
			location.geolocation.type= req.body.geolocation.type,
			location.sourceLocationId= req.body.sourceLocationId,
			location.filmDirectorName= req.body.filmDirectorName,
			location.address= req.body.address,
			location.startDate= req.body.startDate,
			location.year= req.body.year
			const location1 = await location.save()

			res.json(location1)
		}catch{
			res.send('Error')
		}
})


//delete function
router.delete('/locations/:id', async (req,res)=>{
		try{
			const location = await locationsService.findByIdAndRemove(req.params.id)
		}catch(Err){
			res.send('Error')
		}

})


module.exports = router

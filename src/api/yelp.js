import axios from 'axios';


export default axios.create({

	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer 0bFTfpK5VlR-Bg8DEZSPQwlbMFmlmIdVU-9DlAqMTps9yGUKTKB_2kHQsEmGPktIAeJsdiAmLy6rQhrKdzdDgAG0_5LJqCKhe_lH-nUNpuwxcXcRYLiZI3IKkoSCXnYx'
	}

});
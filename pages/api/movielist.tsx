import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handle = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const page = req.query.page ?? 1;
    try {
        const result = await axios.get(`https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&page=${page}`, {
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjdiMTk4NTEyNGIzYThmZDBkMTI3NzBlOTgxMTAwNCIsInN1YiI6IjYyMGNiOWYxZTI3MjYwMDAxYWI5YTU3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pak8HtiLpfAvf07u4Uwe4igbZjX7Nw_efUXne9cOQtQ` },
        });
        res.status(200).json(result.data);
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'nope'});
    }
}
export default handle;

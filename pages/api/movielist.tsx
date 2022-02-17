import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handle = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const page = req.query.page ?? 1;
    const tmdbKey = process.env.TMDB_KEY;
    try {
        const result = await axios.get(`https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&page=${page}`, {
            headers: { Authorization: `Bearer ${tmdbKey}` },
        });
        res.status(200).json(result.data);
    } catch(error) {
        res.status(500).json({message: 'nope'});
    }
}
export default handle;

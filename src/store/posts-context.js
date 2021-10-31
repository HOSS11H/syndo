import React, { useState }  from"react";
import Resala from '../images/logos/resala.jpg';
import AhlMasr from '../images/logos/AhlMasr.png';
import Chart from '../images/charts/chart.png';
import Client from '../images/clients/client.jpg';

const PostsContext = React.createContext({
    posts: [],
})

export const PostsContextProvider = ( props ) => {
    
    const fetchedPosts = [
        {   
            id: '111' ,
            title: 'resala',
            img: Resala,
            postClass: 'a',
            endDate: '11/10/2021',
            desc: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil fugerspiciatis collapsing 1500s.',
            progress: 60,
            infos: {
                goal: '1,000,000',
                rate: '12%',
                tenor: '12 months',
                invested: '500,000',
                investors: '5',
                skin: '5%'
            },
            tags: ['loan', 'industry'],
            about: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.',
            charts: [
                { num: 1, src: Chart},
                { num: 2, src: Chart},
            ],
            clients: [
                { num: 1, src: Client},
                { num: 2, src: Client},
                { num: 3, src: Client},
            ],
            team: [
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
            ],

        },
        {   
            id: '222' ,
            title: 'ahl masr',
            img: AhlMasr,
            postClass: 'b',
            endDate: '11/10/2021',
            desc: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil fugerspiciatis collapsing 1500s.',
            progress: 60,
            infos: {
                goal: '1,000,000',
                rate: '12%',
                tenor: '2 months',
                invested: '400,000',
                investors: '5',
                skin: '5%'
            },
            tags: ['loan', 'industry'],
            about: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.',
            charts: [
                { num: 1, src: Chart},
                { num: 2, src: Chart},
            ],
            clients: [
                { num: 1, src: Client},
                { num: 2, src: Client},
                { num: 3, src: Client},
            ],
            team: [
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
            ],

        },
        {   
            id: '333' ,
            title: 'resala',
            img: Resala,
            postClass: 'a',
            endDate: '11/10/2021',
            desc: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil fugerspiciatis collapsing 1500s.',
            progress: 60,
            infos: {
                goal: '1,000,000',
                rate: '12%',
                tenor: '12 months',
                invested: '500,000',
                investors: '5',
                skin: '5%'
            },
            tags: ['loan', 'industry'],
            about: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.',
            charts: [
                { num: 1, src: Chart},
                { num: 2, src: Chart},
            ],
            clients: [
                { num: 1, src: Client},
                { num: 2, src: Client},
                { num: 3, src: Client},
            ],
            team: [
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
            ],

        },
        {   
            id: '444' ,
            title: 'ahl masr',
            img: AhlMasr,
            postClass: 'b',
            endDate: '11/10/2021',
            desc: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil fugerspiciatis collapsing 1500s.',
            progress: 60,
            infos: {
                goal: '1,000,000',
                rate: '12%',
                tenor: '2 months',
                invested: '400,000',
                investors: '5',
                skin: '5%'
            },
            tags: ['loan', 'industry'],
            about: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.',
            charts: [
                { num: 1, src: Chart},
                { num: 2, src: Chart},
            ],
            clients: [
                { num: 1, src: Client},
                { num: 2, src: Client},
                { num: 3, src: Client},
            ],
            team: [
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
                { name: 'name', title: 'job title', src: Client},
            ],

        },
    ]

    const [ posts , setPosts ] = useState(fetchedPosts);

    const contextValue = {
        posts: posts,
    }
    return (
        <PostsContext.Provider value={contextValue}>
            {props.children}
        </PostsContext.Provider>
    )
}
export default PostsContext;

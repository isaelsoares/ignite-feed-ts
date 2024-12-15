import { Header } from "./componentes/Header";
import { Sidebar } from "./componentes/Sidebar";
import { Post } from "./componentes/Post";
import { PostType } from "./componentes/Post"

import './global.css';

import styles from './App.module.css';

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rockeseat',
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'}          
        ],
        publishedAt: new Date('2024-10-03 19:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/isaelsoares.png',
            name: 'Isael Soares',
            role: 'Desenvolvedor web',
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraaa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'}          
        ],
        publishedAt: new Date('2024-10-10 20:00:00'),
    }
];


export function App() {
    return (
        <div>
            <Header></Header>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => {
                        return(
                            <Post
                                key={post.id}
                                post={post}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    )
};

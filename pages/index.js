import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    const players= [
        {name: "Tsun", playerID: 10},
        {name: "Kiyama", playerID: 20}
    ]
    return (
        <>
            <Player playerNum={10} name={"Hatake"}/>
        </>
    );
};


function Player(props) {
    return (
        <div>
            {props.playerNum} {props.name}
        </div>
    );
}
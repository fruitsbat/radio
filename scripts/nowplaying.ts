type NowPlaying = {
  song_history: string;
};

type Pub = {
    offset: number;
    data: string;
}

export interface AzuraApiReturn {
    pub: any;
}
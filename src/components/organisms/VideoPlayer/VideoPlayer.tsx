import ReactPlayer from 'react-player'
import PlayIcon from '@heroicons/react/solid/PlayIcon'
import PauseIcon from '@heroicons/react/solid/PauseIcon'
import VolumeOffIcon from '@heroicons/react/solid/VolumeOffIcon'
import VolumeUpIcon from '@heroicons/react/solid/VolumeUpIcon'
import { useState } from 'react'

export interface IVideoPlayerProps {}

const VideoPlayer = () => {
  const [playing, setplaying] = useState(false)
  const [muted, setmuted] = useState(true)
  return (
    <div className='relative w-full lg:h-160 md:h-128 h-96 sm:h-112'>
      <div className='absolute inset-0 -z-10'>
        <ReactPlayer
          width='100%'
          height='100%'
          volume={0.5}
          muted={muted}
          playing={playing}
          auto
          controls={false}
          url='https://www.youtube.com/watch?v=BUvEEVq4woU'
        />
      </div>
      <div className='absolute inset-0 z-0 flex items-end justify-start p-3'>
        <button
          type='button'
          className='flex px-6 py-2 text-black bg-white rounded-full hover:bg-opacity-80'
          onClick={() => setplaying((state) => !state)}
        >
          {!playing ? (
            <>
              Watch <PlayIcon className='w-6 h-6 ml-2' />
            </>
          ) : (
            <>
              Pause <PauseIcon className='w-6 h-6 ml-2' />
            </>
          )}
        </button>
        {playing && (
          <button
            type='button'
            className='p-2 ml-2 text-white rounded-full hover:bg-opacity-80'
            onClick={() => setmuted((state) => !state)}
          >
            {muted ? (
              <VolumeOffIcon className='w-6 h-6 ml-2' />
            ) : (
              <VolumeUpIcon className='w-6 h-6 ml-2' />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer

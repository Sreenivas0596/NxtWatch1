import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import {
  ProfileImageContainer,
  ThumbnailUrlImg,
  ProfileImg,
  ViewDateContainer,
  VideoListContainer,
  ProfileHeading,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {title, thumbnailUrl, publishedAt, viewCount, channel} = videoDetails

  const {name, profileImageUrl} = channel
  return (
    <VideoListContainer>
      <ThumbnailUrlImg src={thumbnailUrl} alt={title} />

      <ProfileImageContainer>
        <div>
          <ProfileImg src={profileImageUrl} alt={name} />
        </div>
        <div>
          <ProfileHeading>{title}</ProfileHeading>

          <p>{name}</p>
          <ViewDateContainer>
            <p>{viewCount} views </p>
            <BsDot />
            <p>{formatDistanceToNow(new Date(publishedAt))}</p>
          </ViewDateContainer>
        </div>
      </ProfileImageContainer>
    </VideoListContainer>
  )
}

export default VideoCard

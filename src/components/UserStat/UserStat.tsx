import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

export interface UserStatProps extends Pick<
  LocalGithubUser,
'repos' | 'followers' | 'following'
  > { }

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.info}>
    <div className={styles.infoTitle}>Repos</div>
      <div className={styles.infoTitle}>{repos}</div>
    </div>
    <div className={styles.info}>
    <div className={styles.infoTitle}>Following</div>
      <div className={styles.infoTitle}>{following}</div>
    </div>
    <div className={styles.info}>
    <div className={styles.infoTitle}>Followers</div>
      <div className={styles.infoTitle}>{followers}</div>
    </div>
  </div>
);

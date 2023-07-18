export interface Listing {
  kind: string;
  data: Data;
}

interface Data {
  after: string | null;
  dist: number;
  modhash: string;
  geo_filter: any | null;
  children: Child[];
  before: string | null;
}

export interface Child {
  kind: string;
  data: T3Data;
}

export interface T3Data {
  approved_at_utc: string | null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: string | null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: any | null;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height: number | null;
  top_awarded_type: string | null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: string | null;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: any;
  thumbnail_width: number | null;
  author_flair_template_id: string | null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: any | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: string | null;
  secure_media_embed: any;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by: string | null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: number;
  author_flair_css_class: string | null;
  author_flair_richtext: any[];
  gildings: Gildings;
  content_categories: string[];
  is_self: boolean;
  mod_note: string | null;
  created: number;
  link_flair_type: string;
  wls: any | null;
  removed_by_category: string | null;
  banned_by: string | null;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string;
  likes: string | null;
  suggested_sort: string | null;
  banned_at_utc: string | null;
  view_count: number | null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: Award[];
  awarders: any[];
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string | null;
  treatment_tags: any[];
  visited: boolean;
  removed_by: string | null;
  num_reports: any;
  distinguished: string;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: string | null;
  removal_reason: string | null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: any;
  author: string;
  discussion_type: string | null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string | null;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: string | null;
  permalink: string;
  parent_whitelist_status: string | null;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: any | null;
  is_video: boolean;
}

interface Gildings {
  gid_2?: number;
  gid_3?: number;
}

interface Award {
  giver_coin_reward: string | null;
  subreddit_id: string;
  is_new: boolean;
  days_of_drip_extension: string | null;
  coin_price: number;
  id: string;
  penny_donate: string | null;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: string | null;
  tiers_by_required_awardings: any;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date: string | null;
  is_enabled: boolean;
  awardings_required_to_grant_benefits: string | null;
  description: string;
  end_date: string | null;
  sticky_duration_seconds: string | null;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: ResizedIcon[];
  icon_format: string | null;
  icon_height: number;
  penny_price: string | null;
  award_type: string;
  static_icon_url: string;
}

interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

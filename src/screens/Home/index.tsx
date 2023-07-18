/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {RedditContext} from '../../hooks/pics.context';

import {Child, T3Data} from '../../types';
import {WithStatusBar} from './styled';

import WebView from 'react-native-webview';

const Home: React.FC = () => {
  const [selectedPostUrl, setSelectedPostUrl] = React.useState<string | null>(
    null,
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const {getThreads, threads} = useContext(RedditContext);

  React.useEffect(() => {
    getThreads();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getThreads();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderPostItem = ({item}: {item: Child}) => {
    const {thumbnail, title, author, score, num_comments, created_utc, url} =
      item.data as T3Data;

    const navigateToPost = (link: string) => {
      setSelectedPostUrl(link);
    };

    return (
      <React.Fragment>
        {!title.includes('UPDATE: /r/PICS is being forced to break the') ? (
          <TouchableOpacity onPress={() => navigateToPost(url)}>
            <View style={{flexDirection: 'row', padding: 10}}>
              {thumbnail && thumbnail.includes('https') ? (
                <Image
                  source={{uri: thumbnail}}
                  style={{width: 80, height: 80}}
                />
              ) : null}
              <View style={{flex: 1, marginLeft: 10}}>
                <Text>{title}</Text>
                <Text>Author: {author}</Text>
                <Text>Score: {score}</Text>
                <Text>Comments: {num_comments}</Text>
                <Text>
                  Created: {new Date(created_utc * 1000).toDateString()}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : null}
      </React.Fragment>
    );
  };

  if (selectedPostUrl) {
    return (
      <WithStatusBar>
        <React.Fragment>
          <TouchableOpacity onPress={() => setSelectedPostUrl(null)}>
            <View style={{height: 50, paddingLeft: 10}}>
              <Text style={{fontSize: 18}}>{'< Back'}</Text>
            </View>
          </TouchableOpacity>
          <WebView source={{uri: selectedPostUrl}} />
        </React.Fragment>
      </WithStatusBar>
    );
  }

  return (
    <WithStatusBar>
      <FlatList
        data={threads.data.children}
        keyExtractor={item => item.data.id}
        renderItem={renderPostItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </WithStatusBar>
  );
};

export default Home;

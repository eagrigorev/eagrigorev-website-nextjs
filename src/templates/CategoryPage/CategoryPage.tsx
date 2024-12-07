/* Global */
import React from 'react';

/* Components */
import CategoriesNavigation from '@/components/common/CategoriesNavigation/CategoriesNavigation';
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import PostsGrid from '@/components/posts-grid/PostsGrid/PostsGrid';

/* Scripts */
import { getPostsFromSingleCategory } from '@/scripts/getMarkdown';

/* Utils */
import { TITLE } from '@/utils/const/title';

type Props = {
  category: string;
};

const CategoryPage: React.FunctionComponent<Props> = ({ category }) => {
  const posts = getPostsFromSingleCategory(category);
  const title: string =
    category === 'illustrations'
      ? TITLE.ILLUSTRATIONS
      : category === 'music'
        ? TITLE.MUSIC
        : category === 'tabs'
          ? TITLE.TABS
          : TITLE.NOTES;
  return (
    <main className="container">
      <DynamicTitle layout="page-left" title={title} />
      <CategoriesNavigation showBackLink={true} />
      <PostsGrid posts={posts} />
    </main>
  );
};

export default CategoryPage;

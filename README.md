第一步计算ruleArea的宽高

1. 完成childrenArea的布局
   1. 计算后代节点的ruleArea的起点和宽高
   2. 计算childrenArea的宽高
2. 完成ruleArea的布局
   1. 计算childrenArea的起点（相对node的selfArea的位置）
3. 计算ruleArea的宽高
4. 计算ruleArea的起点

第二步计算ruleArea的起点

第三步计算children的绝对坐标



第一步：

1. ruleArea指的是node及其所有后代节点所围成的区域
   1. ruleArea的起点相对于该node的parent的childrenArea的起点定位
   2. ruleArea是一个layoutArea，要计算ruleArea，首先要计算childrenArea，所以需要让childrenArea完成布局，才能计算ruleArea
2. childrenArea指的是node的所有后代节点所围成的区域
   1. childrenArea的起点相对于该node的selfArea的起点定位
   2. childrenArea也是一个layoutArea，计算childrenArea的时候，需要知道每一个child的ruleArea
   3. 如果child是叶子节点，那么ruleArea就是child的selfArea；否则递归计算child的ruleArea
3. selfArea的起点相对于画布顶点，目前来说是window左上点










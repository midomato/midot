---
title: "【初心者】Blenderのアニメーションが重いなと感じた方へ"
date: "2025-05-13"
thumbnail: "blenderanim.webp"
tag: ["Blender"]
---


<span style="color: orange">blender</span>のタイムライン上でのアニメーションって凄い重い。

なんせ、描画しながらのアニメーションなので重いのは当然っちゃ当然。

ただ、やっぱりアニメーションをしながら確認したい、そんな方におすすめの

軽量化方法を伝授します。

# Overlaysをオフ
そのほかの大切な情報も消えてしまう可能性があるので慎重に

# PlaybackのSyncをFrame Droppingにする
フレームを必ず処理が終わるまで待つのではなく処理が無理だと判断した場合、次のフレームに移ってくれます。

# Viewport shadingをソリッドにする
そりゃ色があるよりない方が軽いよね。

以上！！
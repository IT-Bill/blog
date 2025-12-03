import React from 'react';
import { Info, AlertTriangle, Clock, MessageSquare, MapPin } from 'lucide-react';
import { Card } from './Card';
import { ProgressBar } from './ProgressBar';
import { RECENT_COMMENTS } from '../constants';

export const RightSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* System Notice */}
      <Card>
        <div className="flex items-center gap-2 text-sm font-medium mb-4 border-b border-white/5 pb-2">
           <Info size={16} className="text-blue-400" /> 系统公告
        </div>
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
           <div>
              <div className="flex items-center gap-1.5 mb-1 text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> 【系统提醒】
              </div>
              <p>恭喜您触发隐藏剧情——角落的小破站</p>
              <p>任务完成条件：</p>
              <ul className="list-disc list-inside pl-1 text-slate-400">
                  <li>阅读一篇文章</li>
                  <li>点赞一篇文章</li>
                  <li>评论一篇文章</li>
              </ul>
              <p className="mt-1">任务完成奖励：称号「友善的阅读者」</p>
           </div>
           
           <div>
              <div className="flex items-center gap-1.5 mb-1 text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-400"></span> 【系统警告】
              </div>
              <p>禁止在该网络区域发布以下内容：</p>
              <ul className="list-disc list-inside pl-1 text-slate-400">
                  <li>暴力、色情、不良广告等违法信息</li>
                  <li>国家、党派等政治敏感信息</li>
              </ul>
           </div>
        </div>
      </Card>

      {/* Visitor Info */}
      <Card>
         <div className="flex items-center gap-2 text-sm font-medium mb-2 border-b border-white/5 pb-2">
           <MapPin size={16} className="text-purple-400" /> 访客信息
        </div>
        <div className="text-xs text-slate-400">
            正在加载...
        </div>
      </Card>

      {/* Life Countdown */}
      <Card>
         <div className="flex items-center gap-2 text-sm font-medium mb-4 border-b border-white/5 pb-2">
           <Clock size={16} className="text-blue-400" /> 人生倒计时
        </div>
        <div>
            <ProgressBar label="今日已经过去 5 小时" subLabel="" percent={22} colorClass="bg-gradient-to-r from-blue-400 to-blue-600" />
            <ProgressBar label="这周已经过去 4 天" subLabel="" percent={57} colorClass="bg-gradient-to-r from-yellow-400 to-orange-500" />
            <ProgressBar label="本月已经过去 4 天" subLabel="" percent={12} colorClass="bg-gradient-to-r from-red-400 to-pink-500" />
            <ProgressBar label="今年已经过去 12 个月" subLabel="" percent={100} colorClass="bg-gradient-to-r from-green-400 to-emerald-600" />
        </div>
      </Card>

      {/* Recent Comments */}
      <Card noPadding>
         <div className="p-4 border-b border-white/5 flex items-center gap-2 text-sm font-medium">
           <MessageSquare size={16} className="text-blue-400" /> 最新评论
        </div>
        <div className="divide-y divide-white/5">
            {RECENT_COMMENTS.map(comment => (
                <div key={comment.id} className="p-3 hover:bg-white/5 transition-colors group cursor-pointer">
                    <div className="flex items-start gap-3">
                        <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full border border-white/10" />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className={`text-xs font-bold ${comment.isAdmin ? 'text-blue-400' : 'text-slate-200'}`}>{comment.author}</span>
                                <span className="text-[10px] text-slate-500">{comment.date}</span>
                            </div>
                            <div className="bg-[#0f172a]/50 p-2 rounded text-xs text-slate-400 truncate group-hover:text-slate-300 transition-colors">
                                {comment.content}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Card>
    </div>
  );
};

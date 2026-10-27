export interface Roadmap { id: string; title: string; description: string; source: string; sections: { title: string; topics: string[] }[] }

/** 根据 AI Roadmap 公开路线的标题与知识节点整理，详细资源链接保留在原站。 */
export const roadmaps: Roadmap[] = [
  {
    "id": "ai-tools-resources",
    "title": "AI 工具与资源",
    "source": "https://www.airoadmaps.org/roadmaps/ai-tools-resources",
    "description": "精选的 AI 学习资源、工具和社区，帮助你更高效地学习和应用 AI 技术。由 Zara Zhang 策划的优质资源库。",
    "sections": [
      {
        "title": "📺 精选视频教程",
        "topics": [
          "LLM 基础视频",
          "提示工程实战",
          "AI 产品思维",
          "Andrew Ng: 用 AI 更快构建",
          "ChatGPT 增长策略"
        ]
      },
      {
        "title": "🎙️ 推荐播客",
        "topics": [
          "Latent Space 播客",
          "AI & I 播客",
          "Google DeepMind 播客",
          "AI Daily Brief",
          "No Priors 播客"
        ]
      },
      {
        "title": "🛠️ 实用工具",
        "topics": [
          "NotebookLM",
          "Granola",
          "TLDW",
          "Comet AI Browser",
          "Poke AI Assistant",
          "Cloud Studio"
        ]
      },
      {
        "title": "👥 社区资源",
        "topics": [
          "X (Twitter) 社区",
          "精选 Newsletter",
          "AI Valley Newsletter",
          "Ben's Bites",
          "AINews by smol.ai"
        ]
      },
      {
        "title": "💻 实践技能",
        "topics": [
          "Vibe Coding 实践",
          "AI 评估实践",
          "AI 产品构建"
        ]
      }
    ]
  },
  {
    "id": "deep-learning",
    "title": "深度学习路线图",
    "source": "https://www.airoadmaps.org/roadmaps/deep-learning",
    "description": "深入学习神经网络和深度学习技术，掌握现代 AI 的核心方法",
    "sections": [
      {
        "title": "基础理论",
        "topics": [
          "神经网络基础",
          "激活函数",
          "优化算法",
          "正则化技术"
        ]
      },
      {
        "title": "核心架构",
        "topics": [
          "卷积神经网络 (CNN)",
          "循环神经网络 (RNN/LSTM)",
          "Transformer 架构"
        ]
      },
      {
        "title": "高级技术",
        "topics": [
          "深度学习框架",
          "迁移学习",
          "生成对抗网络 (GAN)"
        ]
      },
      {
        "title": "项目实践",
        "topics": [
          "深度学习项目"
        ]
      }
    ]
  },
  {
    "id": "generative-ai",
    "title": "生成式 AI (Generative AI)",
    "source": "https://www.airoadmaps.org/roadmaps/generative-ai",
    "description": "掌握当前最热门的 AI 技术：从 Transformer 架构到大语言模型（LLM）、图像生成模型，学习 Prompt Engineering、RAG、Fine-tuning 等实战技能。",
    "sections": [
      {
        "title": "入门基础",
        "topics": [
          "生成式AI入门基础",
          "实践基础与工具"
        ]
      },
      {
        "title": "基础架构",
        "topics": [
          "注意力机制 (Attention)",
          "Transformer 架构",
          "预训练与微调",
          "BERT 及变体"
        ]
      },
      {
        "title": "大语言模型",
        "topics": [
          "GPT 系列模型",
          "大语言模型基础",
          "Claude、Gemini 等模型"
        ]
      },
      {
        "title": "实践技能",
        "topics": [
          "Prompt Engineering",
          "RAG (检索增强生成)",
          "LLM 微调技术",
          "LangChain & Agent"
        ]
      },
      {
        "title": "图像生成",
        "topics": [
          "生成对抗网络 (GAN)",
          "变分自编码器 (VAE)",
          "扩散模型 (Diffusion)",
          "Stable Diffusion",
          "DALL-E & Midjourney"
        ]
      },
      {
        "title": "多模态模型",
        "topics": [
          "CLIP 多模态模型",
          "多模态大模型",
          "视频生成模型"
        ]
      },
      {
        "title": "实战项目",
        "topics": [
          "LLM 应用开发"
        ]
      }
    ]
  },
  {
    "id": "machine-learning",
    "title": "机器学习基础路线图",
    "source": "https://www.airoadmaps.org/roadmaps/machine-learning",
    "description": "从零基础到机器学习工程师的完整学习路径，涵盖数学基础、核心算法、实战项目等内容",
    "sections": [
      {
        "title": "基础知识",
        "topics": [
          "Python 编程基础",
          "NumPy & Pandas",
          "数学基础",
          "数据可视化"
        ]
      },
      {
        "title": "核心算法",
        "topics": [
          "监督学习",
          "无监督学习",
          "集成学习"
        ]
      },
      {
        "title": "实战技能",
        "topics": [
          "模型评估与优化",
          "特征工程",
          "实战项目"
        ]
      }
    ]
  },
  {
    "id": "natural-language-processing",
    "title": "自然语言处理路线图",
    "source": "https://www.airoadmaps.org/roadmaps/natural-language-processing",
    "description": "从文本处理基础到大语言模型的 NLP 完整学习路径",
    "sections": [
      {
        "title": "基础知识",
        "topics": [
          "文本预处理",
          "词向量",
          "序列模型"
        ]
      },
      {
        "title": "核心任务",
        "topics": [
          "文本分类",
          "序列到序列任务",
          "命名实体识别"
        ]
      },
      {
        "title": "核心技术",
        "topics": [
          "注意力机制",
          "Transformer 模型"
        ]
      },
      {
        "title": "预训练模型",
        "topics": [
          "BERT 系列模型",
          "GPT 系列模型",
          "大模型微调"
        ]
      },
      {
        "title": "项目实践",
        "topics": [
          "NLP 项目实战"
        ]
      }
    ]
  },
  {
    "id": "reinforcement-learning",
    "title": "强化学习 (Reinforcement Learning)",
    "source": "https://www.airoadmaps.org/roadmaps/reinforcement-learning",
    "description": "从基础概念到深度强化学习，掌握智能体与环境交互学习的核心技术，应用于游戏 AI、机器人控制等领域。",
    "sections": [
      {
        "title": "基础概念",
        "topics": [
          "强化学习基础",
          "马尔可夫决策过程 (MDP)",
          "Bellman 方程",
          "动态规划"
        ]
      },
      {
        "title": "经典算法",
        "topics": [
          "蒙特卡洛方法",
          "时序差分学习 (TD)",
          "Q-Learning",
          "SARSA"
        ]
      },
      {
        "title": "深度强化学习",
        "topics": [
          "函数逼近",
          "DQN (Deep Q-Network)",
          "策略梯度方法",
          "Actor-Critic 方法",
          "PPO (Proximal Policy Optimization)",
          "DDPG (连续控制)",
          "SAC (Soft Actor-Critic)"
        ]
      },
      {
        "title": "高级话题",
        "topics": [
          "基于模型的强化学习",
          "多智能体强化学习",
          "离线强化学习",
          "逆强化学习 (IRL)"
        ]
      },
      {
        "title": "实践应用",
        "topics": [
          "强化学习应用"
        ]
      }
    ]
  },
  {
    "id": "computer-vision",
    "title": "计算机视觉路线图",
    "source": "https://www.airoadmaps.org/roadmaps/computer-vision",
    "description": "从图像处理基础到深度学习视觉应用的完整学习路径",
    "sections": [
      {
        "title": "基础知识",
        "topics": [
          "图像处理基础",
          "图像滤波与增强",
          "特征提取"
        ]
      },
      {
        "title": "深度学习应用",
        "topics": [
          "图像分类",
          "目标检测",
          "语义分割",
          "实例分割"
        ]
      },
      {
        "title": "专项应用",
        "topics": [
          "人脸识别",
          "姿态估计"
        ]
      },
      {
        "title": "项目实践",
        "topics": [
          "计算机视觉项目"
        ]
      }
    ]
  },
  {
    "id": "ai-engineering",
    "title": "AI工程学习路线图 (AI Engineering Learning Roadmap)",
    "source": "https://www.airoadmaps.org/roadmaps/ai-engineering",
    "description": "从编程基础到AI工程师的完整学习路径，涵盖LLM APIs、AI代理、RAG技术、基础设施部署等核心技能，专注于AI工程化实践。",
    "sections": [
      {
        "title": "编码与基础",
        "topics": [
          "编码与机器学习基础"
        ]
      },
      {
        "title": "核心技术",
        "topics": [
          "LLM APIs",
          "模型适配",
          "RAG与代理RAG"
        ]
      },
      {
        "title": "代理系统",
        "topics": [
          "AI代理",
          "前瞻性元素"
        ]
      },
      {
        "title": "基础设施与运维",
        "topics": [
          "存储与检索",
          "基础设施"
        ]
      },
      {
        "title": "安全与质量",
        "topics": [
          "安全",
          "可观测性与评估"
        ]
      }
    ]
  }
]

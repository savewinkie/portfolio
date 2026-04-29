'use client';

import { useState, useEffect } from 'react';
import { Star, GitFork, Users, Calendar } from 'lucide-react';

const USERNAME = 'savewinkie';

export default function GithubStats() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=4`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('Failed');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const memberSince = user?.created_at ? new Date(user.created_at).getFullYear() : '—';

  return (
    <section className="github-section" id="github">
      <div className="sec-header">
        <span className="sec-prompt">~</span>
        <h2 className="sec-title"><span>./</span>github</h2>
        <div className="sec-line" />
      </div>

      <p className="github-subtitle reveal">
        <span className="t-comment">// live data — pulled from github.com/{USERNAME}</span>
      </p>

      <div className="github-window reveal">
        <div className="gh-titlebar">
          <div className="gh-dots">
            <span className="gh-dot gh-r" />
            <span className="gh-dot gh-y" />
            <span className="gh-dot gh-g" />
          </div>
          <div className="gh-tab">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>github.com/{USERNAME}</span>
          </div>
          <div className="gh-live">
            <div className="gh-live-dot" />
            <span>LIVE</span>
          </div>
        </div>

        <div className="gh-body">
          {loading ? (
            <div className="gh-loading">
              <div className="gh-spinner" />
              <span>fetching data...</span>
            </div>
          ) : error ? (
            <div className="gh-error">
              <span>Could not load GitHub data</span>
              <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer">
                Visit profile →
              </a>
            </div>
          ) : (
            <>
              <div className="gh-profile">
                <div className="gh-avatar-wrap">
                  <img src={user?.avatar_url} alt={user?.login} className="gh-avatar" />
                  <div className="gh-status-pulse" />
                </div>
                <div className="gh-info">
                  <div className="gh-name">{user?.name || user?.login}</div>
                  <div className="gh-handle">@{user?.login}</div>
                  {user?.bio && <p className="gh-bio">{user.bio}</p>}
                </div>
                <a
                  href={user?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-follow"
                >
                  Follow
                </a>
              </div>

              <div className="gh-stats">
                <div className="gh-stat">
                  <Users size={14} strokeWidth={1.5} />
                  <div>
                    <div className="gh-stat-num">{user?.followers ?? 0}</div>
                    <div className="gh-stat-lbl">followers</div>
                  </div>
                </div>
                <div className="gh-stat">
                  <Star size={14} strokeWidth={1.5} />
                  <div>
                    <div className="gh-stat-num">{totalStars}</div>
                    <div className="gh-stat-lbl">total stars</div>
                  </div>
                </div>
                <div className="gh-stat">
                  <GitFork size={14} strokeWidth={1.5} />
                  <div>
                    <div className="gh-stat-num">{user?.public_repos ?? 0}</div>
                    <div className="gh-stat-lbl">public repos</div>
                  </div>
                </div>
                <div className="gh-stat">
                  <Calendar size={14} strokeWidth={1.5} />
                  <div>
                    <div className="gh-stat-num">{memberSince}</div>
                    <div className="gh-stat-lbl">member since</div>
                  </div>
                </div>
              </div>

              <div className="gh-repos-header">
                <span className="t-comment">// recent repositories</span>
              </div>

              <div className="gh-repos">
                {repos.slice(0, 4).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-repo"
                  >
                    <div className="gh-repo-top">
                      <span className="gh-repo-name">{repo.name}</span>
                      {repo.private ? (
                        <span className="gh-repo-tag private">private</span>
                      ) : (
                        <span className="gh-repo-tag public">public</span>
                      )}
                    </div>
                    {repo.description && (
                      <p className="gh-repo-desc">{repo.description}</p>
                    )}
                    <div className="gh-repo-meta">
                      {repo.language && (
                        <span className="gh-repo-lang">
                          <span className="gh-lang-dot" style={{ background: getLangColor(repo.language) }} />
                          {repo.language}
                        </span>
                      )}
                      <span className="gh-repo-stat">
                        <Star size={11} strokeWidth={1.8} />
                        {repo.stargazers_count}
                      </span>
                      <span className="gh-repo-stat">
                        <GitFork size={11} strokeWidth={1.8} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="gh-statusbar">
          <span className="gh-status-left">$ git remote -v</span>
          <span className="gh-status-mid">● connected</span>
          <span className="gh-status-right">github.com</span>
        </div>
      </div>
    </section>
  );
}

function getLangColor(lang) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    Go: '#00ADD8',
    Rust: '#dea584',
    'C++': '#f34b7d',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Shell: '#89e051',
    Vue: '#41b883',
    Svelte: '#ff3e00',
  };
  return colors[lang] || '#888';
}
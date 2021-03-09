module.exports = {
  apps : [{
    name: 'api',
    script: 'ts-node',
    args: 'src/app.ts',
    watch: '.',
    instances: 2,
    exec_mode: 'cluster',
    kill_timeout : 3000,
    restart_delay: 3000,
    shutdown_with_message: true
  }]
};

-- Snippet: tick logger
module._tick_log_counter = module._tick_log_counter or 0

function module.on_tick(ctx)
  if not ctx.setting("enabled", true) then
    return
  end

  module._tick_log_counter = module._tick_log_counter + 1
  if module._tick_log_counter % 40 == 0 then
    ctx.log("heartbeat " .. tostring(module._tick_log_counter))
  end
end

-- Snippet: command status
function module.on_command(ctx, args)
  local sub = args[1] or "status"
  if sub == "status" then
    local player = ctx.player()
    ctx.log("ready for " .. player.name)
    return true
  end
  return false
end
